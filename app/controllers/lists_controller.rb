class ListsController < ApplicationController
  before_action :set_board, only: [:new, :create]
  before_action :set_lists, only: :new

  def new
    @list = List.new
    @card = Card.new
    @activity = Activity.new
  end

  def create
    @list = List.new(list_params)
    if @list.save

    else

    end
  end

  private

  def list_params
    params.require(:list).permit(:name).merge(board: @board)
  end

  def set_board
    @board = Board.find(params[:board_id])
  end

  def set_lists
    @lists = @board.lists
  end
end
