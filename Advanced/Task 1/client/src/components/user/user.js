import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { getAllByParentId } from "../../apis/region"
import { AppContext } from "../../contextapi/context/AppContext"
import * as appActions from "../../contextapi/action/AppAction"
import "./user.css"

export const User = () => {
  const navigate = useNavigate()

  const { appState, appDispatch } = useContext(AppContext)

  //  get all countries at the first rendering
  useEffect(() => {
    getAllByParentId(appState.root.id)
      .then(res => appDispatch({
        type: appActions.GET_ALL_COUNTRIES,
        payload: res.data.getAllByParentId
      }))
      .catch(err => console.error(err))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //  go to the admin page
  const goBack = () => navigate(-1)

  //  get all countries
  const reload = async () => await getAllByParentId(appState.root.id)
    .then(res => appDispatch({
      type: appActions.GET_ALL_COUNTRIES,
      payload: res.data.getAllByParentId
    }))
    .catch(err => console.error(err))

  //  get states of the selected country
  const getStates = async country_id => await getAllByParentId(country_id)
    .then(res => appDispatch({
      type: appActions.GET_STATES,
      payload: res.data.getAllByParentId
    }))
    .catch(err => console.error(err))

  //  get cities of the selected state
  const getCities = async state_id => await getAllByParentId(state_id)
    .then(res => appDispatch({
      type: appActions.GET_CITIES,
      payload: res.data.getAllByParentId
    }))
    .catch(err => console.error(err))


  //  get list of states of the selected country and close other lists if open
  const handleOpenStates = country => {
    getStates(country.id)

    Array
      .from(document.getElementsByClassName('countries'))
      .map(element => element.open = false)
  }

  //  get list of cities of the selected state and close other lists if open
  const handleOpenCities = state => {
    getCities(state.id)

    Array
      .from(document.getElementsByClassName('states'))
      .map(element => element.open = false)
  }

  return (
    <div className="container">
      <div className="top-btn">
        <button className="bg-dark text-light" onClick={reload}>Reload</button>
        <button className="bg-dark text-light" onClick={goBack}>Manage Location</button>
      </div>

      <ul className="tree text-light">
        {/* --- Countries --- */}
        {appState.countries.map(country =>
          <li className="bg-secondary-40 country-control border" key={country.id}>
            <details className="countries">
              <summary onClick={() => handleOpenStates(country)}>
                <label className="form-control">
                  <input type="checkbox" defaultChecked={"checked"} />
                  {country.region}
                </label>
              </summary>
              {/* --- States --- */}
              <ul>
                {appState.states.map(state =>
                  <li className="bg-secondary-70 state-control border" key={state.id}>
                    <details className="states">
                      <summary onClick={() => handleOpenCities(state)}>
                        <label className="form-control">
                          <input type="checkbox" defaultChecked={"checked"} />
                          {state.region}
                        </label>
                      </summary>
                      {/* --- Cities --- */}
                      <ul>
                        {appState.cities.map(city =>
                          <li className="bg-secondary city-control border" key={city.id}>
                            <label className="form-control">
                              <input type="checkbox" defaultChecked={"checked"} />
                              {city.region}
                            </label>
                          </li>
                        )}
                      </ul>
                      {/* --- End Cities --- */}
                    </details>
                  </li>
                )}
              </ul>
              {/* --- End States --- */}
            </details>
          </li>
        )}
        {/* --- End Countries --- */}
      </ul>
    </div >
  )
}

/*
 <div className="tree_main">
        <ul id="bs_main" className="main_ul">
          <li id="bs_1">
            <span className="plus">&nbsp;</span>
            <input type="checkbox" id="c_bs_1" />
            <span>Main Level 1 </span>
            <ul id="bs_l_1" className="sub_ul" >
              <li id="bf_1">
                <span className="plus">&nbsp;</span>
                <input type="checkbox" id="c_bf_1" />
                <span>Sub Level 1 </span>
                <ul id="bf_l_1" className="inner_ul">
                  <li id="io_1">
                    <input type="checkbox" id="c_io_1" /><span>Last Level 1 </span></li>
                  <li id="io_2">
                    <input type="checkbox" id="c_io_2" /><span>Last Level 2 </span></li>
                  <li id="io_3">
                    <input type="checkbox" id="c_io_3" /><span>Last Level 3 </span></li>
                  <li id="io_4">
                    <input type="checkbox" id="c_io_4" /><span>Last Level 4 </span></li>
                </ul>
              </li>
              <li id="bf_2">
                <span className="plus">&nbsp;</span>
                <input type="checkbox" id="c_bf_2" />
                <span>Sub Level 2</span>
                <ul id="bf_l_2" className="inner_ul">
                  <li id="io_5">
                    <input type="checkbox" id="c_io_5" /><span>Last Level 5 </span></li>
                  <li id="io_6">
                    <input type="checkbox" id="c_io_6" /><span>Last Level 6 </span></li>
                  <li id="io_7">
                    <input type="checkbox" id="c_io_7" /><span>Last Level 7 </span></li>
                  <li id="io_8">
                    <input type="checkbox" id="c_io_8" /><span>Last Level 8 </span></li>
                </ul>
              </li>
            </ul>
          </li>
          <li id="bs_2">
            <span className="plus">&nbsp;</span>
            <input type="checkbox" id="c_bs_2" />
            <span>Main Level 2 </span>
            <ul id="bs_l_2" className="sub_ul">
              <li id="bf_3">
                <span className="plus">&nbsp;</span>
                <input type="checkbox" id="c_bf_3" />
                <span>Sub Level 3 </span>
                <ul id="bf_l_3" className="inner_ul">
                  <li id="io_9">
                    <input type="checkbox" id="c_io_9" /><span>Last Level 9 </span></li>
                  <li id="io_10">
                    <input type="checkbox" id="c_io_10" /><span>Last Level 10 </span></li>
                  <li id="io_11">
                    <input type="checkbox" id="c_io_11" /><span>Last Level 11 </span></li>
                  <li id="io_12">
                    <input type="checkbox" id="c_io_12" /><span>Last Level 12 </span></li>
                </ul>
              </li>
              <li id="bf_4">
                <span className="plus">&nbsp;</span>
                <input type="checkbox" id="c_bf_4" />
                <span>Sub Level 4 </span>
                <ul id="bf_l_4" className="inner_ul">
                  <li id="io_13">
                    <input type="checkbox" id="c_io_13" /><span>Last Level 13 </span></li>
                  <li id="io_14">
                    <input type="checkbox" id="c_io_14" /><span>Last Level 14 </span></li>
                  <li id="io_15">
                    <input type="checkbox" id="c_io_15" /><span>Last Level 15 </span></li>
                  <li id="io_16">
                    <input type="checkbox" id="c_io_16" /><span>Last Level 16 </span></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>






.plus, .minus {
  display: inline-block; 
background-repeat: no-repeat;
background-size: 16px 16px !important;
width: 16px;
height: 16px; 
}

.plus {
  background-image: url(https://img.icons8.com/color/48/000000/plus.png);
}

.minus {
  background-image: url(https://img.icons8.com/color/48/000000/minus.png);
}

ul {
  list-style: none;
  padding: 0px 0px 0px 20px;
}

  ul.inner_ul li:before {
      content: "├";
      font-size: 18px;
      margin-left: -11px;
      margin-top: -5px;
      vertical-align: middle;
      float: left;
      width: 8px;
      color: #41424e;
  }

  ul.inner_ul li:last-child:before {
      content: "└";
  }

.inner_ul {
  padding: 0px 0px 0px 35px;
}






$(document).ready(function () {
  $(".plus").click(function () {
    $(this).toggleClass("minus").siblings("ul").toggle();
  })

  $("input[type=checkbox]").click(function () {
    //alert($(this).attr("id"));
    //var sp = $(this).attr("id");
    //if (sp.substring(0, 4) === "c_bs" || sp.substring(0, 4) === "c_bf") {
    $(this).siblings("ul").find("input[type=checkbox]").prop('checked', $(this).prop('checked'));
    //}
  })

  $("input[type=checkbox]").change(function () {
    var sp = $(this).attr("id");
    if (sp.substring(0, 4) === "c_io") {
      var ff = $(this).parents("ul[id^=bf_l]").attr("id");
      if ($('#' + ff + ' > li input[type=checkbox]:checked').length == $('#' + ff + ' > li input[type=checkbox]').length) {
        $('#' + ff).siblings("input[type=checkbox]").prop('checked', true);
        check_fst_lvl(ff);
      }
      else {
        $('#' + ff).siblings("input[type=checkbox]").prop('checked', false);
        check_fst_lvl(ff);
      }
    }

    if (sp.substring(0, 4) === "c_bf") {
      var ss = $(this).parents("ul[id^=bs_l]").attr("id");
      if ($('#' + ss + ' > li input[type=checkbox]:checked').length == $('#' + ss + ' > li input[type=checkbox]').length) {
        $('#' + ss).siblings("input[type=checkbox]").prop('checked', true);
        check_fst_lvl(ss);
      }
      else {
        $('#' + ss).siblings("input[type=checkbox]").prop('checked', false);
        check_fst_lvl(ss);
      }
    }
  });

})

function check_fst_lvl(dd) {
  //var ss = $('#' + dd).parents("ul[id^=bs_l]").attr("id");
  var ss = $('#' + dd).parent().closest("ul").attr("id");
  if ($('#' + ss + ' > li input[type=checkbox]:checked').length == $('#' + ss + ' > li input[type=checkbox]').length) {
    //$('#' + ss).siblings("input[id^=c_bs]").prop('checked', true);
    $('#' + ss).siblings("input[type=checkbox]").prop('checked', true);
  }
  else {
    //$('#' + ss).siblings("input[id^=c_bs]").prop('checked', false);
    $('#' + ss).siblings("input[type=checkbox]").prop('checked', false);
  }

}

function pageLoad() {
  $(".plus").click(function () {
    $(this).toggleClass("minus").siblings("ul").toggle();
  })
}
*/