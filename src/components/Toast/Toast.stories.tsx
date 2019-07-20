import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import wInfo from "../../utils/wInfo";
import Toast from "./Toast";

const stories = storiesOf("Components/Toast", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => (
    <>
      <div>
        <Toast
          type={text("type", "success")}
          text={text("text", "Profile updated!")}
          icon="data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='25' fill='%233ABF7C'/%3E%3Cpath d='M37.8732 18.6238L35.9116 16.5383C35.8336 16.4461 35.711 16.4 35.5995 16.4C35.477 16.4 35.3655 16.4461 35.2875 16.5383L21.6902 30.699L16.7417 25.5831C16.6526 25.491 16.5411 25.4449 16.4297 25.4449C16.3182 25.4449 16.2068 25.491 16.1176 25.5831L14.1337 27.6341C13.9554 27.8184 13.9554 28.1065 14.1337 28.2908L20.3751 34.7432C20.7763 35.158 21.2667 35.4 21.6791 35.4C22.2698 35.4 22.7825 34.9506 22.9719 34.7663C22.9719 34.7663 22.9719 34.7663 22.9831 34.7663L37.8843 19.2805C38.0404 19.0847 38.0404 18.7966 37.8732 18.6238Z' fill='white'/%3E%3C/svg%3E%0A"
        />

        <br />

        <Toast
          type="info"
          text="You can use this promo code today!!!"
          icon="data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 0C11.2019 0 0 11.2019 0 25C0 38.7981 11.2019 50 25 50C38.7981 50 50 38.7981 50 25C50 11.2019 38.7981 0 25 0ZM27.524 37.5H22.476V22.476H27.524V37.5ZM27.524 17.5481H22.476V12.5H27.524V17.5481Z' fill='%234D9DE0'/%3E%3C/svg%3E%0A"
        />

        <br />

        <Toast
          type="warning"
          text="Your balance is low!"
          icon="data:image/svg+xml,%3Csvg width='50' height='44' viewBox='0 0 50 44' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 43.1818H50L25 0L0 43.1818ZM27.2727 36.3636H22.7273V31.8182H27.2727V36.3636ZM27.2727 27.2727H22.7273V18.1818H27.2727V27.2727Z' fill='%23FF8552'/%3E%3C/svg%3E%0A"
        />

        <br />
        <Toast
          type="error"
          text="Something went wrong, please try again."
          icon="data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM27.5 37.5H22.5V32.5H27.5V37.5ZM27.5 27.5H22.5V12.5H27.5V27.5Z' fill='%23DB504A'/%3E%3C/svg%3E%0A"
        />
      </div>
    </>
  ))
);
