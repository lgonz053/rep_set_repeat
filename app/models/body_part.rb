class BodyPart < ApplicationRecord
  has_many :body_correlations
  has_many :exercises, through: :body_correlations
end
