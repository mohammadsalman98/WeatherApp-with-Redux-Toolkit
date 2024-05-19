// ==============redux imports ===============
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from './features/Weatherslice'
// ==============react imports ===============
import { useEffect, useRef, useState } from "react";
// ==============External libraries ===============
import { useTranslation } from "react-i18next";
import moment from "moment";
import "moment/locale/ar";

export default function Weatherapp() {
    const [date, setDate] = useState('');
    const { t, i18n } = useTranslation();
    const [lang, setlang] = useState(false);
    const directionref = useRef();
    const dispatch = useDispatch();
    const temp = useSelector((state) => {
        return state.weatherr.weather;
    });
    moment.locale("ar");
    useEffect(() => {
        dispatch(fetchWeather());
        if (lang) {
            moment.locale("en");
            i18n.changeLanguage('en');
            directionref.current.dir = 'ltr';
        }
        else {
            i18n.changeLanguage('ar');
            moment.locale("ar");
            directionref.current.dir = 'rtl';
        }
        setDate(moment().format("MMMM Do YYYY, h:mm:ss a"));
    }
        , [lang])
    const handlebutton = () => {
        setlang((prev) => {
            return !prev
        });
        console.log(lang);
    }
    return (
        <>
            <div ref={directionref} className='weatherapp flex flex-wrap justify-center items-center h-screen' dir='rtl' >
                <div className="box flex flex-col   rounded-xl shadow-md  ">
                    <div className="flex flex-row content-center m-2  py-2 border-b-2">
                        <p className="text-5xl m-2">{t(temp.Capital)}</p>
                        <p className="self-end mr-2 mb-3 text-md">&nbsp;, {date} </p>
                    </div>
                    <div className="flex flex-row justify-center mx-4 items-center my-5 ">
                        <div className="weather-sympol ">
                            <img className="w-2/5" src="https://uxwing.com/wp-content/themes/uxwing/download/weather/weather-icon.png" alt="" />
                        </div>
                        <span className="main-info flex flex-col text-xl w-1/2">
                            <div className="flex flex-row-reverse justify-center">
                                <p className='text-6xl '>{temp.temp}c</p>
                                <div className=" w-3/12  ">
                                <img className=" " src={temp.icon} />
                                </div>
                            </div>
                            <p className='text-lg '>{t(temp.description)}</p>
                            <p className='text-lg   '>{t('Min')} : {temp.min} | &nbsp; {t('Max')} : {temp.max} </p>
                        </span>
                    </div>
                </div>
            </div>
            <button className="bg-sky-500 text-white p-2 rounded-xl relative bottom-20" onClick={handlebutton}>{lang ? "عربي" : "English"}</button>

        </>
    )
}
   // let cancelAxios = '';
    // const [weatherInfo, setWeatherinfo] = useState({ Capital: '', temp: '', description: 'clear weather', min: '', max: '' });

    // let date = new Date();
    // useEffect(() => {
    // axios.get("https://api.openweathermap.org/data/2.5/weather?lat=33.51&lon=36.27&appid=6c81bf246a003839bcb4665c8b0d169a", {
    //     cancelToken: new axios.CancelToken((c) => {
    //         cancelAxios = c;
    //     })
    // })
    //     .then((response) => {
    //         setWeatherinfo({
    //            Capital: response.data.name,
    //             temp: Math.round(response.data.main.temp - 273.15),
    //             description: response.data.weather[0].description,
    //             min: Math.floor(response.data.main.temp_min - 273.15),
    //             max: Math.ceil(response.data.main.temp_max - 273.15),
    //         });


    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })
    // return () => {
    //     console.log('canceling...');
    //     cancelAxios();
    // }
    // }, [])