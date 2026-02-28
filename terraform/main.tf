resource "newrelic_one_dashboard" "kagewolffoto" {
  name        = "kagewolffoto metrics"
  permissions = "PUBLIC_READ_WRITE"

  #
  # PAGE 1 — "kagewolffoto metrics"
  #
  page {
    name = "kagewolffoto metrics"

    # Widget 1 — Page Views
    widget_nrql {
      title = "Page Views"

      nrql = "SELECT count(*) FROM PageView WHERE appName = 'kagewolffoto.com' TIMESERIES"

      visualization = "billboard"

      row    = 1
      column = 1
      width  = 4
      height = 3
    }

    # Widget 2 — Entity Minimap
    widget_entity {
      title = "kagewolffoto"

      entity_guid = "NzczODg1OHxCUk9XU0VSfEFQUExJQ0FUSU9OfDExMDM0ODIwOTA"

      visualization = "entity-relationship-management.minimap"

      row    = 1
      column = 5
      width  = 4
      height = 3
    }

    # Widget 3 — Browser Interaction
    widget_nrql {
      title = "browser interaction"

      nrql = "SELECT median(duration) FROM BrowserInteraction WHERE (entityGuid = 'NzczODg1OHxCUk9XU0VSfEFQUExJQ0FUSU9OfDExMDM0ODIwOTA') AND (category IS NOT NULL) LIMIT 5 SINCE 30 minutes ago TIMESERIES UNTIL now"

      visualization = "line"

      row    = 1
      column = 9
      width  = 4
      height = 3
    }
  }

  #
  # PAGE 2 — "Deployment Metrics"
  #
  page {
    name = "Deployment Metrics"

    widget_markdown {
      title = "Deployment Notes"

      text = <<EOF
# Hola! नमस्ते! Hello! やあ!
![New Relic logo](https://newrelic.com/static-assets/images/icons/avatar-newrelic.png)

## Website metrics with geography mapping based on IP.


---
EOF

      row    = 1
      column = 1
      width  = 4
      height = 3
    }
  }
}
