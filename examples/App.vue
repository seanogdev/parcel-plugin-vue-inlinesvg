<template>
  <div>
    <logo />

    <div class="icons">
      <dribbble />
      <github />
      <twitter />
    </div>
  </div>
</template>

<script>
import Logo from './icons/logo.svg'
import Dribbble from './icons/dribbble.svg'
import Twitter from './icons/twitter.svg'
import Github from './icons/github.svg'
export default {
	components: {
		Logo,
		Dribbble,
		Github,
		Twitter
	}
}
</script>

<style>
body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

