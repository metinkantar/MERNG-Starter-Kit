const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");
const MakaleModel = require("./models/MakaleModel");

const typeDefs = gql`
  type Makale {
    id: ID!
    baslik: String!
    icerik: String!
  }
  type Query {
    makalelerGetir: [Makale]!
    makaleGetir(id: ID!): Makale!
  }
  type Mutation {
    makaleOlustur(baslik: String!, icerik: String!): Makale!
    makaleSil(id: ID!): String!
    makaleGuncelle(baslik:String!, icerik: String!): Makale!
  }
`;

const resolvers = {
  Query: {
    async makalelerGetir() {
      const makaleler = await MakaleModel.find();
      return makaleler;
    },
    async makaleGetir(parent, args) {
      try {
        const { id } = args;
        return await MakaleModel.findById(id);
      } catch (error) {
        throw new error();
      }
    },
    
  },
  Mutation: {
    makaleOlustur: async (parent, args) => {
      try {
        const makale = {
          baslik: args.baslik,
          icerik: args.icerik,
        };
        return await MakaleModel.create(makale);
      } catch (error) {
        throw new error();
      }
    },
    makaleGuncelle: async (_, { id }) => {
      try {
        
      } catch (error) {
        throw new error;
      }
    },
    makaleSil: async (_, { id }) => {
      try {
        const silinecek = await MakaleModel.findById(id);
        await silinecek.delete();
        return "Silme işlemi başarılı...";
      } catch (error) {
        throw new error;
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// MongoDb Conntection - MongoDb Bağlantısı
require("dotenv").config();
mongoose
  .connect(process.env.MEKA_DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`MongoDB Veritabanı bağlantı işlemi başarılı ...`);
    return server.listen({ port: 5000 });
  })
  .then((cevap) => {
    console.log(`Server ${cevap.url} adresinde çalışıyor...`);
  })
  .catch((hata) => {
    console.log(hata);
  });
