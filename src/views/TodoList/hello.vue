  <template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script>
  import Layout from '@/layout'
  export default {
    name: 'Hello',
    components: { Layout }
  }
</script>