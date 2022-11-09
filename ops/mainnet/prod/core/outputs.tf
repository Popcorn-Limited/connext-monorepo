output "sequencer-subscriber-dns" {
  value = module.sequencer_subscriber.dns_name
}
output "sequencer-publisher-dns" {
  value = module.sequencer_publisher.dns_name
}

output "router-subscriber-dns" {
  value = module.router_subscriber.dns_name
}
output "router-publisher-dns" {
  value = module.router_publisher.dns_name
}

output "sequencer-publisher-service-endpoint" {
  value = module.sequencer_publisher.service_endpoint
}

output "sequencer-subscriber-service-endpoint" {
  value = module.sequencer_subscriber.service_endpoint
}

output "router-publisher-service-endpoint" {
  value = module.router_publisher.service_endpoint
}

output "router-subscriber-service-endpoint" {
  value = module.router_subscriber.service_endpoint
}

output "router-executor-service-endpoint" {
  value = module.router_executor.service_endpoint
}

output "lighthouse-prover-dns" {
  value = module.lighthouse_prover_cron.daemon_service_name
}

output "lighthouse-prover-service-name" {
  value = module.lighthouse_prover_cron.daemon_service_name
}

output "lighthouse-process-from-root-service-name" {
  value = module.lighthouse_process_from_root_cron.daemon_service_name
}

output "lighthouse-process-from-root-dns" {
  value = module.lighthouse_process_from_root_cron.daemon_service_name
}

output "relayer-service-endpoint" {
  value = module.relayer.service_endpoint
}

output "relayer-dns" {
  value = module.relayer.dns_name
}

output "rmq-management-endpoint" {
  value = module.centralised_message_queue.aws_mq_broker_console
}

output "rmq-amqps-endpoint" {
  value = module.centralised_message_queue.aws_mq_amqp_endpoint
}