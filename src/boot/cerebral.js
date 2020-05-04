import App from '../App.vue'
import Cerebral from "cerebral";
import { Container } from "@cerebral/vue";

const Controller = Cerebral({
  state: {
    message: 'Welcome to Cerebral!',
  },
});

export default async (context) => {
  const render = h =>
    h({
      components: {
        HOC: Container(Controller),
        App,
      },
      template: '<HOC><App/></HOC>',
    })
  context.app.render = render
}
