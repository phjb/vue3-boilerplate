<template>
  <div class="common-layout">
    <el-container>
      <el-main>
        <el-row>
          <el-col>
            <h1>Home</h1>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-button
              type="success"
              round
              style="width: 100%"
              @click="fraseDoChurck"
              >Find</el-button
            >
          </el-col>
        </el-row>
        <el-row v-if="random.value" :style="{ 'padding-top': '5rem' }">
          <el-col>
            <el-card class="box-card" :body-style="{ padding: '0px' }">
              <img
                src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
                class="image"
              />
              <el-result
                icon="success"
                title="Chuck Norris speak..."
                :sub-title="random.value"
              >
                <template #extra>
                  <el-link :href="random.url" target="_blank">Let's go</el-link>
                </template>
              </el-result>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import ChurckNorrisService from '@/services/ChuckNorrisService'
export default {
  data() {
    return {
      random: {
        url: null,
        value: null,
      },
    }
  },
  methods: {
    async fraseDoChurck() {
      this.random = await ChurckNorrisService.getRandom()
    },
  },
}
</script>

<style></style>
