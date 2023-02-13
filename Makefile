deploy-dev:
	yarn run build
	az acr login --name gfacratharipazwe
	skaffold run --profile dev

deploy-prod:
	yarn run build
	az acr login --name gfacratharipazwe
	skaffold run --profile prod