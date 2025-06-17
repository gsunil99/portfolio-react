import { profeesionalProjects } from "../../constants";
import Work from "../Work/Work";


const PersonalProjects = () => {
  return <Work projects={profeesionalProjects} title="Personal Projects" description="Projects I've built independently to explore new ideas, sharpen my skills, and bring concepts to life." /> 
};

export default PersonalProjects;
