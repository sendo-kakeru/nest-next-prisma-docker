# 起動
`docker-compose up`

# コンテナ入る
## front
`docker-compose exec frontend bash`
## back
`docker-compose exec backend bash`
# データベース確認
1. `docker-compose exec backend bash`
2. `npx prisma studio`