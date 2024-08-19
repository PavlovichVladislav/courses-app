import { useState } from "react";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation('about');
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(value => value+=1)}>upd count</button>
      {counter} 
      {t("Информация")}
    </div>
  );
};

export default AboutPage;