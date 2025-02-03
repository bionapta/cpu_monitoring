@echo off
set DUCKDNS_TOKEN=2c4f2822-f39d-462e-aad2-f65aa86df5f0
set DUCKDNS_DOMAIN=grafanabion
curl "https://www.duckdns.org/update?domains=%DUCKDNS_DOMAIN%&token=%DUCKDNS_TOKEN%&ip="