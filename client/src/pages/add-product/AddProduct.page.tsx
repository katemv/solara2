import Banner from "../../components/Organisms/Banner/Banner.component";
import PageContainer from "../../components/Molecules/PageContainer/PageContainer.component";
import Button from "../../components/Atoms/Button/Button.component";
import ROUTES from "../../providers/navigation/routes";
import Input from "../../components/Atoms/Input/Input.component";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    title: yup.string().required(),
}).required();

interface AddProductSchema {
    title: string;
}

const AddProductPage = () => {
    const { control, handleSubmit } = useForm<AddProductSchema>({
        resolver: yupResolver(schema),
    });
    return (
        <>
            <Banner headingIntlKey="Dashboard" subheadingIntlKey="sub" />
            <PageContainer>
                {/*image upload*/}
                <form onSubmit={handleSubmit(d => console.log(d))}>
                    <Input control={control} name="title" placeholderIntlKey="forms.title" />
                    {/*<Input value={"title"} onChange={() => {}}/>*/}
                    {/*<Input value={"description"} onChange={() => {}}/>*/}
                    {/*<Input value={"stock"} onChange={() => {}}/>*/}
                    {/*<Input value={"price"} onChange={() => {}}/>*/}
                </form>
            </PageContainer>
        </>
    );
};

export default AddProductPage;

