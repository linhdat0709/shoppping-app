
import { Header } from '../../components/Header/Header'
import { StyleService, StyleServiceContent, StyleServicePage } from './Service.style'

const Service = () => {
  return (
    <StyleServicePage>
      <Header/>
			<StyleService>
				<StyleServiceContent>
          <div className='title'>Trung tâm hỗ trợ Người mua GUMAX</div>
          <div className='formInput'>
            <input className='input formControl ' placeholder='Enter search keywords' />
            <button className='btn'>Search</button>
          </div>
          <div className='bg'></div>
        </StyleServiceContent>
			</StyleService>
    </StyleServicePage>
  )
}

export default Service
