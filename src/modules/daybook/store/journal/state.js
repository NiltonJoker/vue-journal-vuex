
export default () => ({

  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ullam possimus saepe tenetur similique mollitia magni adipisci quia! Incidunt distinctio pariatur sapiente! Quo quos sapiente, at nisi suscipit eveniet voluptatum.",
      picture: null
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ullam possimus saepe tenetur similique mollitia magni adipisci quia! Incidunt distinctio pariatur sapiente! Quo quos sapiente, at nisi suscipit eveniet voluptatum.",
      picture: null
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ullam possimus saepe tenetur similique mollitia magni adipisci quia! Incidunt distinctio pariatur sapiente! Quo quos sapiente, at nisi suscipit eveniet voluptatum.",
      picture: null
    },
  ]

})  