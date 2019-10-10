import React from 'react'
import { Link } from 'react-router-dom'

import { getGameCategories } from './api'
import NewCategoryItem from './NewCategoryItem'

const NewCategorySection = ({ setGamesFilter }) => {
  return (
    <section>

      <div data-vc-full-width="true" data-vc-full-width-init="true" data-vc-stretch-content="true"
           className="vc_row wpb_row vc_row-fluid z-index vc_custom_1519746491878 vc_row-has-fill"
           style={{position: 'relative', boxSizing: 'border-box'}}>
        <div className="wpb_column vc_column_container vc_col-sm-12 sc_layouts_column_icons_position_left">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="vc_empty_space  vc_custom_1519745892898 height_small" style={{height: '32px'}}>
                <span className="vc_empty_space_inner"/>
              </div>
              <div id="sc_services_162967950"
                   className="sc_services color_style_default sc_services_hover sc_services_featured_top">
                <div className="sc_services_columns_wrap sc_item_columns sc_item_columns_3 trx_addons_columns_wrap columns_padding_bottom">
                  {getGameCategories().map(cat => <NewCategoryItem key={cat.id} setGamesFilter={setGamesFilter} cat={cat}/>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <p>Добро пожаловать</p>
      <p>Самая глубокая страйкбольная площадка в москве!</p>
      <p>Хочешь мощного взрыва эмоций и драйва? Тогда хватит ждать, пора действовать! Если думаешь, что тебя уже ничем
        не удивить, то ты ошибаешься. Пора воплотить свои самые смелые желания в жизнь. Погрузись в загадочную
        атмосферу Бункера! Здесь игра покажется реальностью!</p>
      <Link to='about'>
        <button>О площадке</button>
      </Link>
      <hr/>
    </section>
  )
}

export default NewCategorySection