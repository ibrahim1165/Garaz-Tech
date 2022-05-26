import React from 'react';

const Blog = () => {
    return (
        <div>

       
            <h2 className="text-center text-3xl text-orange-400 mt-4"> Blog</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 px-6 mt-6'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Q . How will you improve the performance of a React Application?</h2>
                    <p>যখন আমরা একটি রেন্ডার করা কম্পোনেন্ট তৈরি করি, তখন React তার উপাদান ট্রির জন্য একটি ভার্চুয়াল DOM তৈরি করে। এখন, যখনই উপাদানটির অবস্থা পরিবর্তিত হয়, প্রতিক্রিয়া ভার্চুয়াল DOM ট্রি পুনরায় তৈরি করে এবং ফলাফলটিকে পূর্ববর্তী রেন্ডারের সাথে তুলনা করে।</p>
                </div>
            </div>


            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Q . What are the different ways to manage a state in a React application?</h2>
                    <p>There are four main types of state you need to properly manage in your React apps:
                        Local state.
                        Global state.
                        Server state.
                        URL state.</p>
                </div>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Q . How does prototypical inheritance work?</h2>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
                </div>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Q . js You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p>You can select products only from one nomenclature. If you have already selected other Products in a different nomenclature these products will be removed from you Product selection list. In the search results if you try to select products from different nomenclature the system will not allow you to select a different nomenclature until you uncheck the eariler selected nomenclature.</p>
                </div>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Q . What is a unit test? Why should write unit tests?</h2>
                    <p>nit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. .</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Blog;