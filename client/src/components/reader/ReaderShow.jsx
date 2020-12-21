import React from 'react'
import { Toolbar, SaveButton, Create, SimpleForm, ReferenceInput, SelectInput, Datagrid, Show, SimpleShowLayout, TextField, DateField, ArrayField, BooleanField, ReferenceManyField, NumberField} from 'react-admin';
import ReaderShowActions from './ReaderShowActions'


const KeyEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton />
    </Toolbar>
);

const ShowPropsExtractor=({children, ...props})=>{
    const {keys=[]}=props.record;

    const readerKeyRowStyle = (record, index) => {
        console.log(record, index, props)
        return {
            backgroundColor: keys.find(key=>{
                return ( 
                    key.uid === record.uid && 
                    key.name === record.name &&
                    key.acctype === record.acctype &&
                    key.acctype2 === record.acctype2 &&
                    key.acctype3 === record.acctype3 &&
                    key.acctype4 === record.acctype4 ) // add back valid until later 
            }) ? '#efe' : 'white',
        }
    }
    return (
        <SimpleShowLayout {...props}>
            <TextField source="readerName" />
            <TextField source="ip" />
            <DateField source="lastPing" showTime locales="de"/>
            <Create resource={props.resource}>
                <SimpleForm toolbar={<KeyEditToolbar/>} margin="none">
                    <ReferenceInput reference="key" source="key_id"  allowEmpty>
                        <SelectInput optionText="name" />
                    </ReferenceInput>
                </SimpleForm>
            </Create>

            <ArrayField label="KEYS IN THE DB" source="keys" >
                <Datagrid>
                    <TextField source="name" />
                    <TextField source="uid" />
                    <DateField source="validUntil" showTime locales="de"/>
                    <BooleanField source="isOneTimeCode" />
                    <NumberField source="acctype" />
                    <NumberField source="acctype2" />
                    <NumberField source="acctype3" />
                    <NumberField source="acctype4" />
                </Datagrid>
            </ArrayField>

            <ReferenceManyField reference="readerkey" target="readerId" label="KEYS ON READER" allowEmpty {...props}>
                <Datagrid  rowStyle={readerKeyRowStyle} {...props}>
                    {console.log(props)}
                    <TextField source="name" />
                    <TextField source="uid" />
                    <DateField source="validUntil" showTime locales="de"/>
                    <NumberField source="acctype" />
                    <NumberField source="acctype2" />
                    <NumberField source="acctype3" />
                    <NumberField source="acctype4" />
                </Datagrid>
            </ReferenceManyField>
            

        </SimpleShowLayout>
    )
}
/* const ReaderShowA = (props) => {
    console.log(props)

    const readerKeyRowStyle = (record, index, props) => {
        console.log(record, index, props)
        return {
            backgroundColor: record.uid > 3031947 ? '#efe' : 'white',
        }
    }
        
    

    return (
        <Show title=" " actions={<ReaderShowActions/>}  {...props}>
            <SimpleShowLayout {...props}>
                <TextField source="readerName" />
                <TextField source="ip" />
                <DateField source="lastPing" showTime locales="de"/>
                <Create resource={props.resource}>
                    <SimpleForm toolbar={<KeyEditToolbar/>} margin="none">
                        <ReferenceInput reference="key" source="key_id"  allowEmpty>
                            <SelectInput optionText="name" />
                        </ReferenceInput>
                    </SimpleForm>
                </Create>

                <ArrayField label="KEYS IN THE DB" source="keys" >
                    <Datagrid>
                        <TextField source="name" />
                        <TextField source="uid" />
                        <DateField source="validUntil" showTime locales="de"/>
                        <BooleanField source="isOneTimeCode" />
                        <NumberField source="acctype" />
                        <NumberField source="acctype2" />
                        <NumberField source="acctype3" />
                        <NumberField source="acctype4" />
                    </Datagrid>
                </ArrayField>

                <ReferenceManyField reference="readerkey" target="readerId" label="KEYS ON READER" allowEmpty {...props}>
                    <Datagrid  rowStyle={(record, index, props)=>readerKeyRowStyle(record, index, props)} {...props}>
                        {console.log(props)}
                        <TextField source="name" />
                        <TextField source="uid" />
                        <DateField source="validUntil" showTime locales="de"/>
                        <NumberField source="acctype" />
                        <NumberField source="acctype2" />
                        <NumberField source="acctype3" />
                        <NumberField source="acctype4" />
                    </Datagrid>
                </ReferenceManyField>
                

            </SimpleShowLayout>
        </Show>
    )
} */

const ReaderShow = (props) => {
    return (
        <Show title=" " actions={<ReaderShowActions/>}  {...props}>
            <ShowPropsExtractor/>
        </Show>
    )
}

export default ReaderShow