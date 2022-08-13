import axios from "axios";

export const upload = async (file: any) => {
    const CLOUNDINARY_URL = "https://api.cloudinary.com/v1_1/df58mgl4m/image/upload";
    const CLOUNDINARY_PRESET = "mgap18or";
    console.log(file);

    const formData = new FormData();
    formData.append("file", file.originFileObj);
    formData.append("upload_preset", CLOUNDINARY_PRESET);

    const { data } = await axios.post(CLOUNDINARY_URL, formData, {
        headers: { "Content-Type": "application/form-data" },
    });

    return data.url;
};