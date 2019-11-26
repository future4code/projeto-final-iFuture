import React from 'react';
import Header from '../../components/Header';
import { ContainerSearch, ContainerSearchPage, IconSearch, BaseInput, TextSearchPage } from './styled'


const SearchPage = () => {
  return (
    <div>
        <Header title={'Busca'} isArrowBackVisible={true} />
        <ContainerSearchPage>

            <ContainerSearch>
                <IconSearch />

                <BaseInput
                    placeholder="Restaurante"
                />
            </ContainerSearch>

            <TextSearchPage> Busque por nome de restaurante</TextSearchPage>
         
        </ContainerSearchPage>
    </div>
  );
};

export default SearchPage;
