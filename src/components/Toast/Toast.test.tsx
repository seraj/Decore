import * as React from "react";

import themed from "../../utils/themed";
import Toast from "./Toast";

describe("Toast", () => {
  it("should render correctly", () => {
    const component = themed(
      <Toast
        type="success"
        text="Profile Updated."
        icon="data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='25' fill='%233ABF7C'/%3E%3Cpath d='M37.8732 18.6238L35.9116 16.5383C35.8336 16.4461 35.711 16.4 35.5995 16.4C35.477 16.4 35.3655 16.4461 35.2875 16.5383L21.6902 30.699L16.7417 25.5831C16.6526 25.491 16.5411 25.4449 16.4297 25.4449C16.3182 25.4449 16.2068 25.491 16.1176 25.5831L14.1337 27.6341C13.9554 27.8184 13.9554 28.1065 14.1337 28.2908L20.3751 34.7432C20.7763 35.158 21.2667 35.4 21.6791 35.4C22.2698 35.4 22.7825 34.9506 22.9719 34.7663C22.9719 34.7663 22.9719 34.7663 22.9831 34.7663L37.8843 19.2805C38.0404 19.0847 38.0404 18.7966 37.8732 18.6238Z' fill='white'/%3E%3C/svg%3E%0A"
      />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
