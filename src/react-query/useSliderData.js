import { useQuery } from "react-query";
import axios from 'axios';
import { sliderData } from "../components/slider/slider-data";

const fetchSliderData = () => {
    return sliderData;
}

export function useSliderData() {
    return useQuery('sliderData', fetchSliderData)
}