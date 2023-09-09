<template>
	<div class="dropdown">
		<div class="dropdown__hero" :class="{ active: isActive }" @click="isActive = !isActive">
			<span v-text="!value.name ? 'Выберите фильтр' : value.name" />

			<img src="static/caret-down-fill.svg" alt="" />
		</div>

		<transition name="fade">
			<ul v-show="isActive" class="dropdown__list">
				<li class="dropdown__item" @click="changeQuery({})">
					Выберите фильтр
				</li>

				<li class="dropdown__item" @click="changeQuery(item)" v-for="item in query" :key="item.value">
					{{ item.name }}
				</li>
			</ul>
		</transition>
	</div>
</template>

<script>
export default {
	props: {
		query: {
			type: Array,
			default: () => { },
		},
		value: {
			type: Object,
			default: () => { },
		}
	},
	emits: ['input'],
	data() {
		return {
			isActive: false
		}
	},
	methods: {
		changeQuery(item) {
			this.$emit('input', item)
			this.isActive = false
		}
	}
}
</script>

<style scoped>
.dropdown {
	position: relative;
	z-index: 10;
	cursor: pointer;
}

.dropdown__hero {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 10px;
	height: 45px;
	border: 2px solid#323232;
	background: #fff;
	border-radius: 5px;
}

.dropdown__hero img {
	transition: 300ms transform;
}

.dropdown__hero.active {
	border-radius: 5px 5px 0 0;
}

.dropdown__hero.active img {
	transform: rotate(180deg);
}

.dropdown__list {
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	border: 2px solid#323232;
	border-top: none;
	border-radius: 0 0 5px 5px;
}

.dropdown__item {
	position: relative;
	padding: 10px;

	background: #fff;
}

.dropdown__item.disabled {
	padding-left: 15px;
	pointer-events: none;
	color: #54ad2a;
}

.dropdown__item.disabled:before {
	content: '';
	display: block;
	height: 60%;
	left: 7px;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 3px;
	background: #54ad2a;
}

.dropdown__item:not(:last-child) {
	border-bottom: 2px solid#323232;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>