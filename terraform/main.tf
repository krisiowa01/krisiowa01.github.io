resource "newrelic_one_dashboard_json" "kagewolffoto" {
  json = <<EOF
{
  "name": "kagewolffoto metrics",
  "permissions": "PUBLIC_READ_WRITE",
  "pages": [
    {
      "name": "kagewolffoto metrics",
      "widgets": [
        {
          "title": "Page Views",
          "layout": { "row": 1, "column": 1, "width": 4, "height": 3 },
          "visualization": { "id": "viz.billboard" },
          "rawConfiguration": {
            "nrqlQueries": [
              {
                "accountIds": [7738858],
                "query": "SELECT count(*) FROM PageView WHERE appName = 'kagewolffoto.com' TIMESERIES"
              }
            ]
          }
        },
        {
          "title": "kagewolffoto",
          "layout": { "row": 1, "column": 5, "width": 4, "height": 3 },
          "visualization": { "id": "entity-relationship-management.minimap" },
          "rawConfiguration": {
            "entityGuid": "NzczODg1OHxCUk9XU0VSfEFQUExJQ0FUSU9OfDExMDM0ODIwOTA"
          }
        },
        {
          "title": "browser interaction",
          "layout": { "row": 1, "column": 9, "width": 4, "height": 3 },
          "visualization": { "id": "viz.line" },
          "rawConfiguration": {
            "nrqlQueries": [
              {
                "accountIds": [7738858],
                "query": "SELECT median(duration) FROM BrowserInteraction WHERE (entityGuid = 'NzczODg1OHxCUk9XU0VSfEFQUExJQ0FUSU9OfDExMDM0ODIwOTA') AND (category IS NOT NULL) LIMIT 5 SINCE 30 minutes ago TIMESERIES UNTIL now"
              }
            ]
          }
        }
      ]
    },
    {
      "name": "Deployment Metrics",
      "widgets": [
        {
          "title": "Deployment Notes",
          "layout": { "row": 1, "column": 1, "width": 4, "height": 3 },
          "visualization": { "id": "viz.markdown" },
          "rawConfiguration": {
            "text": "# Hola! नमस्ते! Hello! やあ!\\n![New Relic logo](https://newrelic.com/static-assets/images/icons/avatar-newrelic.png)\\n\\n## Website metrics with geography mapping based on IP.\\n\\n---"
          }
        }
      ]
    }
  ]
}
EOF
}
