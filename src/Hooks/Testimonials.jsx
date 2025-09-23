import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Testimonials = () => {
    return useQuery({
        queryKey: ["all-products"],
        queryFn: () => axios.get("https://featurable.com/api/v1/widgets/d944b708-6d26-4fb2-af2a-4fcae233eaef"),
        onError: (error) => {
            console.log(error.message);
        }
    });
}

export default Testimonials
