mkdir -p /mnt/data/OpenAI_Multi-Assistant/backend
cd /mnt/data/OpenAI_Multi-Assistant/backend
npm init -y
touch index.js .env README.md

mkdir -p /mnt/data/OpenAI_Multi-Assistant/frontend
cd /mnt/data/OpenAI_Multi-Assistant/frontend
touch App.js README.md

# Simulate the creation of the react app structure by creating subdirectories
mkdir -p public src

# Touch files to simulate frontend structure
touch public/index.html src/index.js src/App.js src/App.test.js src/index.css src/App.css
