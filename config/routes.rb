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

    get "/exercises" => "exercises#index"
    post "/exercises" => "exercises#create"
    get "/exercises/:id" => "exercises#show"
    patch "/exercises/:id" => "exercises#update"
    delete "/exercises/:id" => "exercises#destroy"

    get "/body_correlations" => "body_correlations#index"
    post "/body_correlations" => "body_correlations#create"
    get "/body_correlations/:id" => "body_correlations#show"
    patch "/body_correlations/:id" => "body_correlations#update"
    delete "/body_correlations/:id" => "body_correlations#destroy"

    get "/body_parts" => "body_parts#index"
    post "/body_parts" => "body_parts#create"
    get "/body_parts/:id" => "body_parts#show"
    patch "/body_parts/:id" => "body_parts#update"
    delete "/body_parts/:id" => "body_parts#destroy"
  end
end
