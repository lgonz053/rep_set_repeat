Rails.application.routes.draw do
  namespace :api do
    post '/users' => 'users#create'

    post '/sessions' => 'sessions#create'

    get "/workouts" => "workouts#index"
    post "/workouts" => "workouts#create"
    get "/workouts/:id" => "workouts#show"
    patch "/workouts/:id" => "workouts#update"
    delete "/workouts/:id" => "workouts#destroy"

    get "/workout_sets" => "workout_sets#index"
    post "/workout_sets" => "workout_sets#create"
    get "/workout_sets/:id" => "workout_sets#show"
    patch "/workout_sets/:id" => "workout_sets#update"
    delete "/workout_sets/:id" => "workout_sets#destroy"
  end
end
