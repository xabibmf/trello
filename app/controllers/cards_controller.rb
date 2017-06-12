class CardsController < ApplicationController
  before_action :set_card, only: :update
  def create
    @list = Card.new(card_params)
    if @list.save
    else
    end
  end

  def update
    if @card.update(card_params)
    else
    end
  end

  private

  def card_params
    params.require(:card).permit(:name, :details).merge(params.permit(:list_id))
  end

  def set_card
    @card = Card.find(params[:id])
  end
end
