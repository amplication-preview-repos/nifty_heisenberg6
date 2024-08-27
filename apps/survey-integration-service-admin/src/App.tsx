import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SurveyLinkList } from "./surveyLink/SurveyLinkList";
import { SurveyLinkCreate } from "./surveyLink/SurveyLinkCreate";
import { SurveyLinkEdit } from "./surveyLink/SurveyLinkEdit";
import { SurveyLinkShow } from "./surveyLink/SurveyLinkShow";
import { ChannelList } from "./channel/ChannelList";
import { ChannelCreate } from "./channel/ChannelCreate";
import { ChannelEdit } from "./channel/ChannelEdit";
import { ChannelShow } from "./channel/ChannelShow";
import { SurveyResponseList } from "./surveyResponse/SurveyResponseList";
import { SurveyResponseCreate } from "./surveyResponse/SurveyResponseCreate";
import { SurveyResponseEdit } from "./surveyResponse/SurveyResponseEdit";
import { SurveyResponseShow } from "./surveyResponse/SurveyResponseShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SurveyIntegrationService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="SurveyLink"
          list={SurveyLinkList}
          edit={SurveyLinkEdit}
          create={SurveyLinkCreate}
          show={SurveyLinkShow}
        />
        <Resource
          name="Channel"
          list={ChannelList}
          edit={ChannelEdit}
          create={ChannelCreate}
          show={ChannelShow}
        />
        <Resource
          name="SurveyResponse"
          list={SurveyResponseList}
          edit={SurveyResponseEdit}
          create={SurveyResponseCreate}
          show={SurveyResponseShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
