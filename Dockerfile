FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .

ARG VITE_APP_API_KEY
ENV VITE_APP_API_KEY=$VITE_APP_API_KEY

RUN npm run build
EXPOSE 4173
CMD ["npm", "run", "preview"]
