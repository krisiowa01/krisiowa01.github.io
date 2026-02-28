variable "newrelic_account_id" {
  type = number
}

variable "newrelic_api_key" {
  type = string
  sensitive = true
}
