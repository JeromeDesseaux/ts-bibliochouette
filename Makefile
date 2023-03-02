dev:
	docker compose -f docker/docker-compose.dev.yml --env-file .env up --force-recreate --build --no-deps

build: 
	docker compose -f docker/docker-compose.dev.yml --env-file .env build

build-clean:
	docker system prune -f --volumes && docker compose -f docker/docker-compose.dev.yml --env-file .env build