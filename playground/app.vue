<template>
  <div>
    <ul>
      <li
        v-for="item in links"
        :key="item.provider"
      >
        <a :href="item.link">{{ item.provider }}</a>
      </li>
    </ul>
    <pre>
      {{ links }}
    </pre>
  </div>
</template>

<script setup>
import { useNuxtApp } from '#app';
const event = {
  title: "My birthday party",
  description: "Be there!",
  start: "2023-05-17T20:15:01Z"  , // UTC time format. 
  duration: [3, "hour"],
};
const { $calendarLink } = useNuxtApp()
const links = $calendarLink(event, ['google', 'outlook', 'office365'])
console.log(links) 
</script>
