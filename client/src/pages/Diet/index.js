import React from 'react'

import {Carousel} from 'react-materialize';

import { Button } from 'react-materialize';

function Diet() {
 
return (

<Carousel
  carouselId="Carousel-32"
  className="white-text center"
  options={{
    fullWidth: true,
    indicators: true,
    duration: 100
  }}
>
<Button className="add-btn btn-small blue z-depth-2" type="submit">Swipe using dots below</Button>
  <div className="red">
    <h2>
        Paleo
    </h2>
    <p>
        paleo diet is an eating plan based on foods humans might have eaten during the Paleolithic Era. The Paleolithic Era dates from around 2.5 million to 10,000 years ago.
        A modern paleo diet includes fruits, vegetables, lean meats, fish, eggs, nuts and seeds. These are foods that in the past people could get by hunting and gathering. It doesn't include foods that became more common when small-scale farming began about 10,000 years ago. These foods include grains, legumes and dairy products.
        Other names for a paleo diet include Paleolithic diet, Stone Age diet, hunter-gatherer diet and cave man diet.
    </p>
  </div>
  <div className="amber">
    <h2>
        The Alkaline Diet
    </h2>
    <p>
    The alkaline diet is also known as the acid-alkaline diet or alkaline ash diet.
    Its premise is that your diet can alter the pH value — the measurement of acidity or alkalinity — of your body.
    Your metabolism — the conversion of food into energy — is sometimes compared to fire. Both involve a chemical reaction that breaks down a solid mass.
    However, the chemical reactions in your body happen in a slow and controlled manner.
    When things burn, an ash residue is left behind. Similarly, the foods you eat leave an “ash” residue known as metabolic waste.
    This metabolic waste can be alkaline, neutral, or acidic. Proponents of this diet claim that metabolic waste can directly affect your bodys acidity.
    In other words, if you eat foods that leave acidic ash, it makes your blood more acidic. If you eat foods that leave alkaline ash, it makes your blood more alkaline.
    According to the acid-ash hypothesis, acidic ash is thought to make you vulnerable to illness and disease, whereas alkaline ash is considered protective.
    By choosing more alkaline foods, you should be able to “alkalize” your body and improve your health.
    Food components that leave an acidic ash include protein, phosphate, and sulfur, while alkaline components include calcium, magnesium, and potassium.
    Certain food groups are considered acidic, alkaline, or neutral:
    </p>
  </div>
  <div className="green">
    <h2>
        Flexitarian Diet
    </h2>
    <p>
        Most Americans do not consume the recommended amounts of dairy, fruits, legumes e.g., chickpeas, lentils and beans, including soy, seafood, vegetables or whole grains.1,2,3 While a complete diet overhaul may seem daunting, one style of eating—the “flexitarian diet”—attempts to make it easier to shift dietary choices by focusing more on what can be added to the diet rather than what should be taken away.
        The flexitarian diet is a play on two words: flexible and vegetarian. While no single definition has been adopted, the flexitarian diet can be generally defined as a semi-vegetarian, plant-forward diet that incorporates dairy and eggs and allows room for meat from time to time. The emphasis on plant foods is thought to contribute to the health benefits associated with a vegetarian diet without requiring compliance to the dietary rules of 100%-vegetarian or vegan diets.
        There are no set calorie or macronutrient goals in a flexitarian diet. Instead, the goal is to increase the consumption of plant or plant-based foods over time, keeping in mind that meat is not off-limits but rather that it is eaten less frequently and/or in smaller portions
        Calories in the flexitarian diet mostly come from nutrient-rich foods such as fruits, legumes, whole grains and vegetables. When it comes to protein, plant-based foods e.g., soy foods, legumes, nuts and seeds are the primary source. Protein also comes from eggs and dairy, with lesser amounts coming from meat, especially red and processed meats. Due to the emphasis on nutrient-dense foods, the flexitarian diet encourages limiting ones intake of saturated fat, added sugars and sodium.
    </p>
  </div>
  <div className="blue">
    <h2>
        Whole 30
    </h2>
    <p>
        The Whole30 diet is a strict 30-day elimination diet that promises a variety of health and emotional benefits.
        It was developed in 2009 by two certified sports nutritionists, who promoted it as a way to reset your metabolism and reshape your relationship with food.
        The program focuses on the idea that certain foods ⁠— like sugar, grains, legumes, alcohol, and dairy ⁠— may negatively affect your health and fitness.
        Eliminating these foods from your diet is supposed to help your body recover from these negative effects and promote long-term health.
        Many people follow this diet in hopes of losing weight. Some may use the program to identify food intolerances or achieve some of its proposed health benefits.
    </p>
  </div>
</Carousel> 

)

}

export default Diet;