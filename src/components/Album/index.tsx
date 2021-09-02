import React, { useState } from 'react'
import  {BiImageAdd, BiPlus, BiXCircle } from 'react-icons/bi'
import { 
  HeaderContainer, 
  HeaderContent, 
  HeaderTitle, 
  HeaderContentAlbum, 
  HeaderCard, 
  HeaderCardAdd, 
  HeaderCardRemove,
  HeaderCardFigure,
  Input,
  HeaderClosedPhoto
} from './styled';
import { useEffect } from 'react';
import api from '../../services/api';

function Album() {

  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<string[]>([])

  let arrayPhotos: string[] = [];

  const handleAddFigure = async (file: any): Promise<void> => {
    const formData = new FormData()
    formData.append('photo', file.target.files[0])
    const figures = await api.add('http://localhost:3002/api/v1/photo/add', formData)
    arrayPhotos = photos;
    arrayPhotos.push(figures.addPhoto)
    setPhotos(arrayPhotos)
    setLoading(!loading)
  }

  const onInputClick = ( event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const element = event.target as HTMLInputElement
    element.value = ''
}

  const handleRemove = async (id: string) => {
    const del = await api.delete(`http://localhost:3002/api/v1/photo/delete`, id)
    if(del === 200) setLoading(!loading);
  }


  const album = async () => {
    const figures = await api.list('http://localhost:3002/api/v1/photo')
    setPhotos([...figures])
  }


  useEffect(() => {
    album()
  }, [loading])

  return <HeaderContainer>
    <HeaderContent>
      <HeaderTitle>FOTO CHALLENGE</HeaderTitle>
      <HeaderContentAlbum>
        {photos.length < 1 &&
         <HeaderCard>
           <BiImageAdd size={65} color="#ddd" />
         </HeaderCard>
        }
        

        {photos.length > 0 && 
          photos.map( (item: any, index: number) => {
            return (
              <HeaderCard key={index} >
                <HeaderCardFigure source={item.image_url} />
                <HeaderCardRemove>
                  <HeaderClosedPhoto onClick={() => handleRemove(item._id)}>
                    <BiXCircle color="#FF0000" size={25} />
                  </HeaderClosedPhoto>
                </HeaderCardRemove>
              </HeaderCard>
            )
          })
        }
        
        {photos.length < 6 &&
            <>
            <HeaderCardAdd htmlFor="addFigure">
              <BiPlus size={40} color="#20DBC2" />
            </HeaderCardAdd>
            <Input type="file" id="addFigure" onChange={handleAddFigure} onClick={onInputClick} multiple={false} accept="image/*"/>
            </>
        }  

      </HeaderContentAlbum>
    </HeaderContent>
  </HeaderContainer>
}

export default Album

