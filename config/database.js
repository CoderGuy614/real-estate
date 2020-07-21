module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        client: "mongo",
        uri:
          "mongodb://jlutz110:Mongoloid99$@realestate-shard-00-00.8inu2.mongodb.net:27017,realestate-shard-00-01.8inu2.mongodb.net:27017,realestate-shard-00-02.8inu2.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-2yt6lj-shard-0&authSource=admin&retryWrites=true&w=majority",
      },
      options: {
        ssl: true,
      },
    },
  },
});
