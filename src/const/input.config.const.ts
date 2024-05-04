import { IInputGroup } from "../types/input.types";

export const DEFAULT_INPUT_CONFIG: Array<IInputGroup> = [
  {
    title: "Define Strategy",
    inputs:['Goal Setting', 'Strategic Initiatives' , 'Business Plan Outline']
  },
  {
    title: "Marketing research",
    inputs:['Customer Profiles', 'Industry Trends']
  },
  {
    title: "Risk Assessment",
    inputs:['Swot Analysis', 'Risk Register' , 'Risk Score']
  }
]