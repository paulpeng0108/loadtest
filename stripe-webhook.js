import http from 'k6/http';

let dummySub = JSON.stringify({
    "id": "evt_1LpwMqK79gtYUaQGlTFj3IJV",
    "object": "event",
    "api_version": "2020-08-27",
    "created": 1665071532,
    "data": {
      "object": {
        "id": "sub_1LpwMbK79gtYUaQGbjwCk0co",
        "object": "subscription",
        "application": null,
        "application_fee_percent": null,
        "automatic_tax": {
          "enabled": true
        },
        "billing_cycle_anchor": 1665071517,
        "billing_thresholds": null,
        "cancel_at": null,
        "cancel_at_period_end": false,
        "canceled_at": null,
        "collection_method": "charge_automatically",
        "created": 1665071517,
        "currency": "usd",
        "current_period_end": 1667749917,
        "current_period_start": 1665071517,
        "customer": "cus_MZ4VhL3TF2qamY",
        "days_until_due": null,
        "default_payment_method": null,
        "default_source": null,
        "default_tax_rates": [],
        "description": null,
        "discount": null,
        "ended_at": null,
        "items": {
          "object": "list",
          "data": [
            {
              "id": "si_MZ4VzwcbfGu4Ci",
              "object": "subscription_item",
              "billing_thresholds": null,
              "created": 1665071518,
              "metadata": {},
              "plan": {
                "id": "price_1KnmtpK79gtYUaQGgmxkMgjR",
                "object": "plan",
                "active": true,
                "aggregate_usage": null,
                "amount": 2999,
                "amount_decimal": "2999",
                "billing_scheme": "per_unit",
                "created": 1649782145,
                "currency": "usd",
                "interval": "month",
                "interval_count": 1,
                "livemode": false,
                "metadata": {},
                "nickname": null,
                "product": "prod_LUmSk6wjyESqUo",
                "tiers_mode": null,
                "transform_usage": null,
                "trial_period_days": null,
                "usage_type": "licensed"
              },
              "price": {
                "id": "price_1KnmtpK79gtYUaQGgmxkMgjR",
                "object": "price",
                "active": true,
                "billing_scheme": "per_unit",
                "created": 1649782145,
                "currency": "usd",
                "custom_unit_amount": null,
                "livemode": false,
                "lookup_key": null,
                "metadata": {},
                "nickname": null,
                "product": "prod_LUmSk6wjyESqUo",
                "recurring": {
                  "aggregate_usage": null,
                  "interval": "month",
                  "interval_count": 1,
                  "trial_period_days": null,
                  "usage_type": "licensed"
                },
                "tax_behavior": "exclusive",
                "tiers_mode": null,
                "transform_quantity": null,
                "type": "recurring",
                "unit_amount": 2999,
                "unit_amount_decimal": "2999"
              },
              "quantity": 1,
              "subscription": "sub_1LpwMbK79gtYUaQGbjwCk0co",
              "tax_rates": []
            }
          ],
          "has_more": false,
          "total_count": 1,
          "url": "/v1/subscription_items?subscription=sub_1LpwMbK79gtYUaQGbjwCk0co"
        },
        "latest_invoice": "in_1LpwMbK79gtYUaQGq4OWP9XN",
        "livemode": false,
        "metadata": {
          "acquisition_source": "Web",
          "cognito_user_id": "622e03dc-3f0d-4f8a-9770-03b1ab79f9a9"
        },
        "next_pending_invoice_item_invoice": null,
        "pause_collection": null,
        "payment_settings": {
          "payment_method_options": null,
          "payment_method_types": null,
          "save_default_payment_method": "off"
        },
        "pending_invoice_item_interval": null,
        "pending_setup_intent": null,
        "pending_update": null,
        "plan": {
          "id": "price_1KnmtpK79gtYUaQGgmxkMgjR",
          "object": "plan",
          "active": true,
          "aggregate_usage": null,
          "amount": 2999,
          "amount_decimal": "2999",
          "billing_scheme": "per_unit",
          "created": 1649782145,
          "currency": "usd",
          "interval": "month",
          "interval_count": 1,
          "livemode": false,
          "metadata": {},
          "nickname": null,
          "product": "prod_LUmSk6wjyESqUo",
          "tiers_mode": null,
          "transform_usage": null,
          "trial_period_days": null,
          "usage_type": "licensed"
        },
        "quantity": 1,
        "schedule": null,
        "start_date": 1665071517,
        "status": "active",
        "test_clock": null,
        "transfer_data": null,
        "trial_end": null,
        "trial_start": null
      },
      "previous_attributes": {
        "status": "incomplete"
      }
    },
    "livemode": false,
    "pending_webhooks": 3,
    "request": {
      "id": "req_5GoO1wqbBgz3BL",
      "idempotency_key": "737fa068-599f-4141-8d23-6408eeb227ad"
    },
    "type": "customer.subscription.updated"
})



export const options = {
    stages: [
        {duration: "1", target: 1},
        //{duration: "2h", target: 50}
    ]
};

export default function () {
    http.post(
        "https://b63dvs0d09.execute-api.us-east-2.amazonaws.com/loadtest/purchases/stripe/receipt", 
        dummySub, 
        {
            headers: {'Content-Type': 'application/json'}
        }
    )
}