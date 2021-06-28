var app = new Vue({
  el: "#app",
  data:{
    birthday: "1991/11/18",
    profiles: {
      Name: "式部 a.k.a Shiki Murobe (Yoshitaka Nagata)",
      Occupation: "Engineer (Programmer)",
      Age: 0,
      Gender: "Male",
      Birthplace: "Otaru, Hokkaido",
      "Live in": "Tokyo",
      Education: "東京学芸大学 (Tokyo Gakugei University)",
      Hobby: "Game (League of Legends, Pokemon, and more...) \nSubculture (Cartoon, Anime, Movie) \nMusic (Rock, Pops, Chorus)",
      Works: "2015年からプログラマとして複数社経験。\n得意分野はフロントエンド、REST API連携、Wordpress。\n2020年には札幌アニメ・声優専門学校にてプログラミング言語非常勤講師を担当。",
    },
    social: {
      twitter: "skb_fantasy",
      github: "",
      facebook: "",
      instagram: "",
    },
    skills: {
      frontends: [
        {
          title: "HTML",
          years: "6年",
        },
        {
          title: "CSS",
          years: "6年",
        },
        {
          title: "javascript",
          years: "6年",
        },
      ],
      serversides: [
        {
          title: "PHP",
          years: "4年",
        },
        {
          title: "Java",
          years: "2年",
        },
        {
          title: "C#",
          years: "2年",
        },
        {
          title: "node.js",
          years: "1年",
        },
        {
          title: "Linux shell",
          years: "2年",
        },
      ],
      databases: [
        {
          title: "MySQL",
          years: "6年",
        },
        {
          title: "Oracle",
          years: "5年",
        },
        {
          title: "SQLServer",
          years: "4年",
        },
        {
          title: "DynamoDB",
          years: "1年",
        },
      ],
      frameworks: [
        {
          title: "jQuery",
          years: "6年",
        },
        {
          title: "bootstrap",
          years: "4年",
        },
        {
          title: "Wordpress",
          years: "5年",
        },
        {
          title: "Vue",
          years: "2年",
        },
        {
          title: "Nuxt.js",
          years: "2年",
        },
        {
          title: "Laravel",
          years: "2年",
        },
        {
          title: ".Net Core",
          years: "1年",
        },
      ],
      other: [
        "Unity", "Adobe XD", "Photoshop", "Illustrator", "ARCore", "three.js",
        "Google Apps Script", "AWS(EC2, S3, DynamoDB, Amplify)", "googleAPI(Maps, AutoML)", "Dialogflow(GoogleAssistant)",
        "VBA(Excel, Access, Word)",
      ],
    },
    portfolios: [
      {
        title: "",
        url : "",
      },
    ],
  },
  mounted(){
    this.profiles.Age = this.calcAge(this.birthday)
  },
  computed: {
    thisYear(){
      return moment().format("YYYY")
    },
  },
  methods: {
    calcAge(birthday){
      return moment().diff(moment(birthday), "years") + " (" + this.birthday +  ")";
    }
  },
})
