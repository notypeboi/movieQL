const changhee ={
    name:"changhee",
    age: 18,
    gender:"female"
}
const resolvers ={
    Query:{
        person: () => changhee
    }
};

export default resolvers;