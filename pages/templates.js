import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

const templates = () => {
  return (
      <Layout>
         <div className='templates'>
             <h1>Example</h1>
           
             <div className='templates-area'>
                 <Link href='https://capable-kulfi-3d31fb.netlify.app/' target='_blank'> 
                 <div className='templ-image-cont'>
                    <img width={300}  src='/2.jpg'/>
                 {/* <img width={300} src='/1.jpg'/> */}
                  </div>
                     </Link>
      
             <div className='templ-text-cont bottom-img'>
                 <p className='templ-text'>Нажмите на изображение, чтобы посмотреть на пример шаблона.</p>

                 <div className='templ-text-main'>
                     <ul>
                         <li className='templ-text'><span >01</span> Шаблоны написаны кодом, каждый имеет отдкльную базу данных и админ панель для измениения информации на сайте.(Пример админ панели ниже)</li>
                         <li className='templ-text'><span>02</span> Никаких водных знаков, как у прочих конструкторов сайтов. </li>
                         <li className='templ-text'><span>03</span> Никаких дополнительных платежей.(Допустим если цена вашего лэндинга 300Р/месяц, то этот прайс не изменится.Доменное имя вы покупаете отдельно.) Также до 20 декабря действует акция (Аренда сайта в течении года и он перейдет в вашу собственность.)</li>
                         <li className='templ-text'><span>04</span> Вы имеете 2 бесплатных правки. Вы состовляете лист, что вы хотите видеть на сайте. После вносим второй лист правок. После этого каждая правка 500Р. Можно добовлять убирать секции/изображения</li>
                         <li className='templ-text'><span>05</span> Также если вас интересует конкретная копия сайта, отправьте ее нам и возможно мы рассмотрим ее как шаблон в последущем.</li>

                     </ul>

                 </div>
             </div>

          

             <div className='templ-image-cont '>
                 
                 <img width={200} src='/1.jpg'></img>
             </div>
             </div>
            
         </div>

      </Layout>
  )
}

export default templates