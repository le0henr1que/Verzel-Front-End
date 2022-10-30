import { useEffect, useState } from 'react'
import { MagnifyingGlass, Funnel, CaretLeft , CaretRight  } from "phosphor-react";
import Header from '../../components/Header';
// import Load from '../../components/Load';

import CardBuy from "../../components/CardBuyCar"

import '../../input.css';





function Task() {
  
  return  (
     <>
      <Header />
      <div className='bg-[#FEF5E7] h-[604px] flex justify-between'>
        <div className="colum mt-[102px] ml-[112px] float-left">

          <div className='w-[521px] leading-3'>
            <h1 className='leading-[116%] text-[#1E1A17] font-extrabold text-5xl'>Garanta seu novo carro com o <span className='text-[#E1861B]'>melhor preço do mercado</span></h1>
          </div>
          <div className='w-[521px] mb-[48px] mt-[24px]'>
            <h1 className='text-lg text-[#4B4845]'>Carros novos e seminovos com preços acessíveis! compre na AutoPark ou venda seu carro para nós!</h1>
          </div>
          <div className='w-[521px]  flex  gap-[38px]'>
            <button className={`tracking-letterButton leading-[150%] text-white font-semibold w-[177px] h-[56px] text-sm flex flex-row justify-center items-center p-[8px 24px] gap-[10px] bg-[#E1861B] rounded-[4px]`}>
                Veja o Catálogo
            </button>   
            <button className={`tracking-letterButton leading-[150%] text-[#E1861B] font-semibold w-[259px] h-[56px] text-sm flex flex-row justify-center items-center p-[8px 24px] gap-[10px] rounded-[4px] border border-[#E1861B]`}>
                Vender ou Trocar de carro
            </button>  
          </div>
        </div>
        <div className="mt-[102px] mb-[0px] ml-[70px] float-right"> 
          <img src="/simbolo.svg" className="w-[783px] h-[506px]"/>
        </div>
      </div>
      <div className='h-[520px] flex justify-center'>
        <div className='w-[1216px]'>
          <div className='flex justify-center mt-[64px] mb-[64px]'>
            <h1 className='text-[#1E1A17] font-semibold text-[34px]'>O que a AutoPark <span className='text-[#E1861B]'>oferece?</span></h1>
          </div>

          <div className='flex justify-center gap-[18px]'>
            <div className='border border-[#E1861B] w-[385.67px] h-[424px] rounded-[8px] flex flex-col justify-center items-center '>
                <div><img src="/Big-icons.svg" /></div>
                <div ><h1 className='font-extrabold text-[24px] text-[#1E1A17] tracking-normal mb-[16px] mt-[32px]'>Reserver e compre online</h1></div>
                <div className='w-[245px] text-[16px] mb-[40px]'><h1>Veja nosso catálogo de veículos e reserve o seu com total segurança durante o processo.</h1></div>
                <div>
                  <button className={`tracking-letterButton  text-white font-normal w-[259px] h-[40px] text-sm flex flex-row justify-center items-center p-[8px 24px] gap-[10px] bg-[#E1861B] rounded-[4px] `}>
                    Ver catálogo de carros
                  </button>  
                </div>
            </div>
            <div className='text-white bg-[#E1861B] w-[385.67px] h-[424px] rounded-[8px] flex flex-col justify-center items-center '>
                <div><img src="/car-icon.svg" /></div>
                <div ><h1 className='font-extrabold text-[24px] text-white tracking-normal mb-[16px] mt-[32px]'>Reserver e compre online</h1></div>
                <div className='w-[245px] text-[16px] mb-[40px]'><h1>Veja nosso catálogo de veículos e reserve o seu com total segurança durante o processo.</h1></div>
                <div>
                  <button className={`text-[#E1861B] bg-white tracking-letterButton font-normal w-[259px] h-[40px] text-sm flex flex-row justify-center items-center p-[8px 24px] gap-[10px] rounded-[4px] `}>
                    Ver catálogo de carros
                  </button>  
                </div>
            </div>
            <div className='border border-[#E1861B] w-[385.67px] h-[424px] rounded-[8px] flex flex-col justify-center items-center '>
                <div><img src="/money-icons.svg" /></div>
                <div ><h1 className='font-extrabold text-[24px] text-[#1E1A17] tracking-normal mb-[16px] mt-[32px]'>Reserver e compre online</h1></div>
                <div className='w-[245px] text-[16px] mb-[40px]'><h1>Veja nosso catálogo de veículos e reserve o seu com total segurança durante o processo.</h1></div>
                <div>
                  <button className={`tracking-letterButton  text-white font-normal w-[259px] h-[40px] text-sm flex flex-row justify-center items-center p-[8px 24px] gap-[10px] bg-[#E1861B] rounded-[4px] `}>
                    Ver catálogo de carros
                  </button>  
                </div>
            </div> 
          </div>
        </div>
      </div>



      <div className='h-[680px] flex justify-center items-center gap-[32px]'>  
        <div className='w-[1216px] flex mr-[65px]'>

          <div className='w-[650px]'><img src="/lamborga.svg" className='mt-[20px]'/></div>
          <div>
            <div className='w-[590px]'>
            <div className='flex justify-start mb-[16px]'>
              <h1 className='text-[#1E1A17] font-semibold text-[34px]'>Avalie seu carro  <span className='text-[#E1861B]'>conosco</span></h1>
            </div>
            <div className='flex justify-start mb-[24px]'>
              <h1 className='text-[#1E1A17] font-normal text-[16px] w-[520px]'>Insira os dados de seu veículo e venda com as melhores condições do mercado.</h1>
            </div>
            <div className='flex justify-between gap-[32px] '>
              <div className="mb-4">
                <input className="border border-[#B9B8B7] w-[280px] h-[56px] rounded-[8px] p-[16px] flex flex-row items-center" id="username" type="text" placeholder="Ex: BRA121212"/>
              </div>            
              <div className="inline-block relative w-64 mb-[32px]">
                <select className="appearance-none border border-[#B9B8B7] w-[280px] h-[56px] bg-white rounded-[8px] p-[16px] flex flex-row items-center">
                  <option>Selecione uma cidade</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>          
              </div>
              <div className='flex justify-start mb-[24px] w-[617px]'>
                <button className={`text-white bg-[#E1861B] tracking-letterButton font-normal w-[617px] h-[56px] text-sm flex flex-row justify-center items-center p-[8px 24px] gap-[10px] rounded-[4px] `}>
                  Ver catálogo de carros
                </button>             
              </div>
              <div className='flex justify-center mb-[24px] '>
                <h1 className='text-[#1E1A17] font-normal text-[16px]'>Não lembra o número da placa? <span className='text-[#E1861B]'>Busque seu carro pelo modelo</span></h1>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className='h-[414px] bg-[#E1861B] flex justify-center mt-[-40px]'>
        <div className='w-[1216px]'>
          <div className="colum mt-[81px] ml-[90px] float-left">
            <div className='w-[521px] leading-3'>
              <h1 className='leading-[116%] text-white text-[34px] font-extrabold text-5xl'>Baixe gratuitamente nosso aplicativo</h1>
            </div>
            <div className='w-[521px] mt-[16px]'>
              <h1 className='text-lg text-white'>Veja nosso catálogo e as novidades da Autopark diretamente do seu celular, de forma rápida, prática e sem custo.</h1>
            </div>
            <div className='w-[521px]  flex gap-[32px] mt-[19px]'>
              <img src="/Badge-PlayStore.svg" />
              <img src="/Badge-AppleStore.svg" />
            </div>
          </div>
        </div>
      </div>


      {/* 1216 */}

      <div className='h-[700px] flex justify-center mt-[64px]'>
        <div className='w-[1216]'>

          <div className='flex justify-between items-center w-full gap-[85px]'>
            
            <div className=''>

              <div className='flex mb-[16px]'>
                <h1 className='text-[#1E1A17] font-semibold text-[34px]'>Por que escolher a <span className='text-[#E1861B]'>AutoPark?</span></h1>
              </div>
              <div className='flex  mb-[64px]'>
                <h1 className='text-[#1E1A17] font-normal text-[16px] w-[520px]'>Referência no mercado, a AutoPark busca entregar a melhor qualidade no setor de automóveis, com seriedade e confiança.</h1>
              </div>

              <div className=' flex justify-center w-[648px]  mb-[40px]'>
                  <div className='w-[312px] '>
                    <div className='flex mb-[8px]'>
                      <h1 className='text-[#1E1A17] font-semibold text-[18px]'>Suporte 24h</h1>
                    </div>
                    <div className='flex '>
                      <h1 className='text-[#1E1A17] font-normal text-[14px] w-[256px]'>Nossa equipe está a disposição 24/7 para atender suas dúvidas.</h1>
                    </div>
                  </div>

                  <div className='w-[312px]'>
                    <div className='flex mb-[8px]'>
                      <h1 className='text-[#1E1A17] font-semibold text-[18px]'>Suporte 24h</h1>
                    </div>
                    <div className='flex '>
                      <h1 className='text-[#1E1A17] font-normal text-[14px] w-[256px]'>Nossa equipe está a disposição 24/7 para atender suas dúvidas.</h1>
                    </div>
                  </div>
              </div>
              <div className=' flex justify-center w-[648px]  mb-[40px]'>
                  <div className='w-[312px] '>
                    <div className='flex mb-[8px]'>
                      <h1 className='text-[#1E1A17] font-semibold text-[18px]'>Suporte 24h</h1>
                    </div>
                    <div className='flex '>
                      <h1 className='text-[#1E1A17] font-normal text-[14px] w-[256px]'>Nossa equipe está a disposição 24/7 para atender suas dúvidas.</h1>
                    </div>
                  </div>

                  <div className='w-[312px] '>
                    <div className='flex mb-[8px]'>
                      <h1 className='text-[#1E1A17] font-semibold text-[18px]'>Suporte 24h</h1>
                    </div>
                    <div className='flex '>
                      <h1 className='text-[#1E1A17] font-normal text-[14px] w-[256px]'>Nossa equipe está a disposição 24/7 para atender suas dúvidas.</h1>
                    </div>
                  </div>
              </div>
              <div className=' flex justify-center w-[648px]  '>
                  <div className='w-[312px] '>
                    <div className='flex mb-[8px]'>
                      <h1 className='text-[#1E1A17] font-semibold text-[18px]'>Suporte 24h</h1>
                    </div>
                    <div className='flex '>
                      <h1 className='text-[#1E1A17] font-normal text-[14px] w-[256px]'>Nossa equipe está a disposição 24/7 para atender suas dúvidas.</h1>
                    </div>
                  </div>

                  <div className='w-[312px] '>
                    <div className='flex mb-[8px]'>
                      <h1 className='text-[#1E1A17] font-semibold text-[18px]'>Suporte 24h</h1>
                    </div>
                    <div className='flex '>
                      <h1 className='text-[#1E1A17] font-normal text-[14px] w-[256px]'>Nossa equipe está a disposição 24/7 para atender suas dúvidas.</h1>
                    </div>
                  </div>
              </div>
            </div>

            <div>
              <img src="/lambo2.svg" className='mt-[20px] b-[0px]'/>
            </div>
          </div>
        </div>
      </div>
      

      <div className='h-[360px] bg-[#E1861B] flex justify-center mt-[-40px]'>

        <div className='w-[50%] h-full bg-[#E1861B] pl-[100px]'>

          <div className="colum mt-[81px] float-right mr-[100px]">
            <div className='w-[521px] leading-3'>
              <h1 className='leading-[116%] text-white text-[34px] font-extrabold text-5xl'>Financie com parcelas que cabem no seu bolso</h1>
            </div>
            <div className='w-[521px] mt-[16px]'>
              <h1 className='text-lg text-white'>Faça a simulação de valores e descubra o melhor preço das parcelas do seu próximo veículo.</h1>
            </div>
            <div className='w-[521px]  flex gap-[32px] mt-[32px]'>
              <button className={`text-[#E1861B] bg-white tracking-letterButton font-normal w-[232px] h-[56px] text-sm flex flex-row justify-center items-center p-[8px 24px] gap-[10px] rounded-[4px] `}>
                  Ver catálogo de carros
                </button> 
            </div>
          </div>

        </div>
        <div className='w-[1216] w-[50%] h-full bg-black pl-[100px]'>

            <div className="colum mt-[81px] ">
              <div className='w-[521px] leading-3'>
                <h1 className='leading-[116%] text-white text-[34px] font-extrabold text-5xl'>Venda seu veículo com os melhores preços</h1>
              </div>
              <div className='w-[521px] mt-[16px]'>
                <h1 className='text-lg text-white'>Avalie seu veículo rapidamente e saiba quanto ele vale e consiga o melhor preço na negociação.</h1>
              </div>
              <div className='w-[521px]  flex gap-[32px] mt-[32px]'>
              <button className={`text-black bg-white tracking-letterButton font-normal w-[232px] h-[56px] text-sm flex flex-row justify-center items-center p-[8px 24px] gap-[10px] rounded-[4px] `}>
                  Ver catálogo de carros
                </button> 
            </div>
          </div>

        </div>
      </div>

      <div className='mb-[20px]'>
        <div className='flex justify-center mt-[64px] mb-[16px]'>
          <h1 className='text-[#1E1A17] font-semibold text-[34px]'>O que a AutoPark <span className='text-[#E1861B]'>oferece?</span></h1>
        </div>
        <div className='flex justify-center '>
          <h1 className='text-[#1E1A17] font-semibold text-[16px]'>Saiba quais são as últimas ofertas que a AutoPark oferece para você.</h1>
        </div>

        <div className="mt-[35px] flex justify-center ">
          <div className='w-[1216] flex justify-content gap-[32px]'>
            <CardBuy/>
            <CardBuy/>
            <CardBuy/>
            <CardBuy/>
          </div>
        </div>

      </div>

         
    </>
  )
}

export default Task