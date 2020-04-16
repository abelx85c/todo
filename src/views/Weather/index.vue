<template>
  <el-container>
    <el-main>
        <WeatherMap />
        <router-view />
    </el-main>
  </el-container>
</template>

<script>
import WeatherMap from "@/components/WeatherMap.vue";


export default {
  name: "Weather",
  components: {
    WeatherMap
  }
};
</script>