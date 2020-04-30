import {Container} from "@cerebral/vue";
import Cerebral from "cerebral";
import App from '../App.vue'

const Controller = Cerebral({
  state: {
    message: 'Welcome to Cerebral!',
  },
});

export default async (context) => {
  let render = h =>
    h({
      components: {
        HOC: Container(Controller),
        App,
      },
      template: '<HOC><App/></HOC>',
    })
  context.app.render = render
}
