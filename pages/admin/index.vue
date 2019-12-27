<template>
  <div>
    <h1>Posts analitics</h1>
    <app-analytics-chart
      title="Views count"
      :labels="views.labels"
      :data="views.data"
    />
    <app-analytics-chart
      title="Comments count"
      :labels="comments.labels"
      :data="comments.data"
    />
  </div>
</template>
<script>
import AppAnalyticsChart from "@/components/admin/AnalyticsChart";
export default {
  layout: "admin",
  middleware: ["admin-auth"],
  head: {
    title: `Analitics | ${process.env.appName}`
  },
  components: {
    AppAnalyticsChart
  },
  async asyncData({ store }) {
    const { views, comments } = await store.dispatch("post/getAnalytics");
    return { views, comments };
  }
};
</script>
