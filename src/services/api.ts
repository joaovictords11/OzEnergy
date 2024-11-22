import { PanelProps } from "@/types/panel";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/ozTech_war/api/rest/",
});

export const getAllPanels = async () => {
  try {
    const response = await instance.get("painelSolar/all");
    const data: PanelProps[] = response.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};
