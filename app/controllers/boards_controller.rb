class BoardsController < ApplicationController
  before_action :set_boards, only: :new

  def new
    @board = Board.new
  end

  def create
    @board = Board.new(board_params)
    if @board.save

    else

    end
  end

  private

  def board_params
    params.require(:board).permit(:name, :color).merge(user: current_user)
  end

  def set_boards
    @boards = current_user.boards
  end
end
